Request/Response Formats

    Chat Moderation

        Request

            {
                "text": "User's chat message",
                "userId"; "User123"
            }

        Response

            {
                "moderationResult: {
                    "isHateSpeech": true,
                    "details": "Contains inapprociate language"
                }, 
                "chatId": "chat_456"
            }

    Record Vote

        Request:

            {
                "guidelineId; "guideline_789",
                "voterId": "user_123",
                "vote": "yes"
            }

        Response:

            {
                "transactionHash": "0xabc123...",
                "message": "Vote recorded successfully"
            }

    Retrieve Guidelines

        Response:

            {
                "guidelines": [
                    "id": "guideline_789",
                    "text": "Use gender-neutral pronouns",
                    "created_at": "2024-06-25T00:00:00Z"
                ]
            }

Error Codes

    404 Bad request:

        {
            "error": "Invalid request data"
        }

    401 Unauthorized:

        {
            "error": "Unauthorized access"
        }

    500 Internal Server Error:

        {
            "error": "Internal server error"
        }




