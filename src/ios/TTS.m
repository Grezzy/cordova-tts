#import "TTS.h"

@implementation TTS

@synthesize synthesizer;

- (void)pluginInitialize
{
    self.synthesizer = [[AVSpeechSynthesizer alloc]init];
}

- (void)speak:(CDVInvokedUrlCommand*)command
{
    NSString* text = [command.arguments objectAtIndex:0];

    AVSpeechUtterance *utterance = [AVSpeechUtterance speechUtteranceWithString:text];
    [utterance setRate:0.1f];
    [self.synthesizer speakUtterance:utterance];
}

- (void)startup:(CDVInvokedUrlCommand *)command
{
    NSDictionary* returnObj = [NSDictionary dictionaryWithObject:@"true" forKey:@"success"];
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:returnObj];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)setLanguage:(CDVInvokedUrlCommand *)command
{
    NSDictionary* returnObj = [NSDictionary dictionaryWithObject:@"true" forKey:@"isLanguageAvailable"];
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:returnObj];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
