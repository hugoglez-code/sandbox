/* Amplify Params - DO NOT EDIT
	API_SANDBOX_GRAPHQLAPIENDPOINTOUTPUT
	API_SANDBOX_GRAPHQLAPIIDOUTPUT
	API_SANDBOX_GRAPHQLAPIKEYOUTPUT
	API_SANDBOX_POSTTABLE_ARN
	API_SANDBOX_POSTTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const response = event.arguments.msg
    return {
        statusCode: 200,
        response
    };
};
