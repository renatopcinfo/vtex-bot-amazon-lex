import React, { useEffect } from 'react';

interface KommunicateChat { }

const KommunicateChat: StorefrontFunctionComponent<KommunicateChat> = ({ }) => {
    useEffect(()=>{
        (function(_d, m){
            var kommunicateSettings = 
            {"appId":"25a4fc21cd2e13048c82ebe02112d75bd","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            (window as any).kommunicate = m; m._globals = kommunicateSettings;
          })(document, (window as any).kommunicate || {});
    }, [])
    return (
        <div></div>
    )
}

KommunicateChat.schema = {
    title: 'admin/editor.chatbot.title',
    description: 'admin/editor.chatbot.description',
    type: 'object',
    properties: {},
}
export default KommunicateChat;