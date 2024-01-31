// import {
//     ConsoleSpanExporter,
//     SimpleSpanProcessor,
//   } from '@opentelemetry/sdk-trace-base';
// import { NodeSDK } from '@opentelemetry/sdk-node';
// import * as process from 'process';
// import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
// import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
// import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
// import { Resource } from '@opentelemetry/resources';
// import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
// import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';
import { Resource } from '@opentelemetry/resources';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { MongoDBInstrumentation } from '@opentelemetry/instrumentation-mongodb';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { ClientRequest } from 'http';


  const exporterOptions = {
    url: 'http://173.212.232.47:4317', // grcp
  };
  
  const traceExporter = new OTLPTraceExporter(exporterOptions);
  
  const sdk = new NodeSDK({
    traceExporter,
    instrumentations: [
    //   getNodeAutoInstrumentations(),
        new MongoDBInstrumentation({
            enhancedDatabaseReporting: true,

            // responseHook: (span, request) => {   
            //     span.setAttribute('mongodb.command', JSON.stringify(request.data));
            //     span.setAttribute('mongodb.collection', request.data);
            // }
        }),
        // new NestInstrumentation(),
        new HttpInstrumentation({
            responseHook: async (
              span,
              response
            ) => {
                span.setAttribute('http.status', response.statusCode);
                span.setAttribute('http.status_text', response.statusMessage);
            },
          }),
        // new HttpInstrumentation({
        // // requestHook: (span, request: ClientRequest) => {
        // //   const requestBodyChunks = [];
        // //   const oldWrite = request.write.bind(request);
        // //   request.write = (data: any) => {
        // //     requestBodyChunks.push(decodeURIComponent(data.toString()));
        // //     return oldWrite(data);
        // //   };
        // //   const oldEnd = request.end.bind(request);
        // //   request.end = (data: any) => {
        // //     if (data) {
        // //       requestBodyChunks.push(decodeURIComponent(data.toString()));
        // //     }
        // //     console.log('request body:', requestBodyChunks.join());
        // //     return oldEnd(data);
        // //   };
        // // },
        // }),
        new ExpressInstrumentation({
            requestHook: (span, request) => {
                span.setAttribute('http.method', request.request.method);
                span.setAttribute('http.target', request.request.url);
                span.setAttribute('http.status_code', request.request.statusCode);
                if (request.request.body){
                    span.setAttribute('http.body', JSON.stringify(request.request.body));
                }
                if (request.request.params !== null && request.request.params !== undefined){
                    span.setAttribute('http.params', JSON.stringify(request.request.params));
                }
                if(request.request.query !== null && request.request.query !== undefined){
                    span.setAttribute('http.query', JSON.stringify(request.request.query));
                }
            },
            
        }),
    ],
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: 'gateway-api-kimo-marketing',
    }),
  });
  
  // initialize the SDK and register with the OpenTelemetry API
  // this enables the API to record telemetry
  sdk.start();
  
  // gracefully shut down the SDK on process exit
  process.on('SIGTERM', () => {
    sdk
      .shutdown()
      .then(() => console.log('Tracing terminated'))
      .catch((error) => console.log('Error terminating tracing', error))
      .finally(() => process.exit(0));
  });

  
  
  export default sdk;

  

  