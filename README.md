# Alexa ABC News Prototype
Simple prototype to demonstrate how the current ABC news editorial / articles would sound like in a TTS and virtual assistant environment.
This prototype also showed how the 90 seconds audio news segment will run in Alexa skills (News Briefing).

## How to Run the Prototype
1. Clone the project and package the skill:
```bash
git clone https://github.com/ABC-RD/alexaskill_abcnews_nodejs.git
```
2. Create or login to an [AWS account](https://aws.amazon.com/). In the AWS Console:

    1. Create an AWS Role in IAM with access to Lambda, Cloudwatch Logs and DynamoDB.
    2. Create an AWS Lambda function named AbcNewsBot. Select the role created above. Configure "Alexa Skills Kit" as the trigger and use the zip file created above as the source.
    3. After creation, take note of the ARN on the upper right, which you'll configure in the Developer Console below.

3. Create or login to an [Amazon Developer account](https://developer.amazon.com).  In the Developer Console:

    1. [Create an Alexa Skill](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-lambda-function) named AbcNewsBotSkill and using the invocation name "a.b.c." and select 'Yes' for Audio Player support.
    2. Copy the contents of `speech_resources/intent_schema.txt` and `speech_resources/utterances.txt` into the intent schema and sample utterances fields on the Interaction Model tab.
    3. Copy the Lambda ARN from above in the Configuration tab.

4. You can start using the skill on your device or in the simulator using the invocation phrase
    - "Alexa, open ABC."
    - "Alexa, ask ABC, what's the breaking news?"
    - "Alexa, ask ABC, what's the latest news?"
    - "Alexa, ask ABC, get me sports news."
    - "Alexa, ask ABC, for today's headlines."


## TODO
1. At the moment, ABC content is hardcoded in the code. Next version will have live ABC content being pulled from wCMS or Terminus.
2. Determine how we can pull the 90 seconds news segment (MP4 format) tp an audio format (MP3).
3. Design UX. Workflow. Add more intents....
