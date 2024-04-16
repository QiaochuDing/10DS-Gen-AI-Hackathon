import logging
import json
import azure.functions as func
from openai import AzureOpenAI

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')


    
    req_json =  req.get_json()
    json_input_context = req_json['context']
    input_prompt = req_json['prompt']

    client = AzureOpenAI(
        api_key = "2f2df45c57554080b7628f05d6b5b45f",  
        api_version = "2024-02-01",
        azure_endpoint = "https://gpt-team19.openai.azure.com/"
    )

    response = client.chat.completions.create(
            model="gpt35-turbo-16k", # model = "deployment_name".
            messages=[
                {"role": "system", "content": "You are a virtual assistant for responding to queries from a government employee responsible for conducting due diligence on companies bidding for grants. You will be given the case record data as json. Record JSON: "  + json.dumps(json_input_context)},
                {"role": "user", "content": input_prompt}
            ]
        )


    print(response.choices[0].message.content)
    return func.HttpResponse(json.dumps({ "success": True, "response": response.choices[0].message.content }), status_code=200)

