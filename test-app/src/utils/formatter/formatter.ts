import { ResultReason } from'microsoft-cognitiveservices-speech-sdk';

export function format(first: string, middle: string, last: string): string {
  let _foo = ResultReason.RecognizedSpeech;
  console.log(_foo);
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
