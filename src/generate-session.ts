export function generateSessionId(): any
{
    let user = figma.currentUser;
    let session_id;
    if(user)
    {
        session_id = user.sessionId;
    }

    return session_id;
}

