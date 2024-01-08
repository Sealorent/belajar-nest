import {
    ConsoleSpanExporter,
    SimpleSpanProcessor,
  } from '@opentelemetry/sdk-trace-base';
import { NodeSDK } from '@opentelemetry/sdk-node';
import * as process from 'process';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { JaegerExporter } from '@opentelemetry/exporter-jaeger';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';

  
const jaegerExporter = new JaegerExporter({
    endpoint: 'http://173.212.232.47:14268/api/traces',
});

const otlpExporter = new OTLPTraceExporter({
    url: 'http://173.212.232.47:14250/api/traces',
    headers: {
        'Content-Type': 'application/vnd.apache.thrift.binary',
    }
});

const traceExporter = otlpExporter;

export const otelSDK = new NodeSDK({
    resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: `nestjs-otel`, // update this to a more relevant name for you!
    }),
    spanProcessor: new SimpleSpanProcessor(traceExporter),
    instrumentations: [
        new HttpInstrumentation(),
        new ExpressInstrumentation(),
        new NestInstrumentation(),
    ],
});

// gracefully shut down the SDK on process exit
process.on('SIGTERM', () => {
    otelSDK
        .shutdown()
        .then(
            () => console.log('SDK shut down successfully'),
            (err) => console.log('Error shutting down SDK', err),
        )
        .finally(() => process.exit(0));
});
  