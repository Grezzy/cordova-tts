#import <Cordova/CDVPlugin.h>
#import <AVFoundation/AVFoundation.h>

@interface TTS : CDVPlugin {}

- (void)speak:(CDVInvokedUrlCommand*)command;
- (void)startup:(CDVInvokedUrlCommand*)command;
- (void)setLanguage:(CDVInvokedUrlCommand*)command;

@property (nonatomic, strong) AVSpeechSynthesizer *synthesizer;
@end
