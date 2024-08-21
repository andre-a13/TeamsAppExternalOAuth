import { app, authentication } from "@microsoft/teams-js";
import * as React from "react";

export default function OAuthPoc() {
  const authenticate = () => {
    app.initialize().then(() => {
      const url = `https://localhost:7071/api/TeamAppOAuthBridgePOC?oauthRedirectMethod={oauthRedirectMethod}&authId={authId}&hostRedirectUrl={hostRedirectUrl}`;
      authentication
        .authenticate({
          url: url,
          isExternal: true,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    }).catch( e => {
      console.log(e);
    });
  };

  return (
    <div>
      <h1>Teams Oauth Test</h1>
      <button onClick={authenticate}>Authenticate</button>
    </div>
  );
}
