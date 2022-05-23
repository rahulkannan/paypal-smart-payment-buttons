/* @flow */
/** @jsx node */
import { html } from 'jsx-pragmatic';
import { AuthButton } from '@paypal/identity-components/dist/button';

import { buttonLabelsByLanguage } from './ButtonText'

type htmlTemplateProps = {|
    cspNonce : string,
    style : Object,
    customLabel : string,
    clientID : string,
    scopes : string,
    returnUrl : string,
    sdkMeta : Object,
    responseType : string
|};

export const htmlTemplate = ({
    locale,
    cspNonce,
    style,
    clientID,
    scopes,
    returnUrl,
    sdkMeta,
    responseType
} : htmlTemplateProps) : string => (
    `<!DOCTYPE html style="height:100%;">
    <head>
       ${ sdkMeta.getSDKLoader({ nonce: cspNonce }) }
    </head>
    <body data-nonce="${ cspNonce }" data-client-version="1.1.1" data-render-version="1.1.1">
    ${ AuthButton({ style:{ ...style, label: buttonLabelsByLanguage({ lang: locale.lang }) } , nonce: cspNonce }).render(html()) }
    <script nonce="${ cspNonce }">
    document.querySelector('.paypal-auth-button').addEventListener('click', function () {
             function onApproveHandler(data) {
                 // call windows.xprops.onApprove and close the window
                 window.xprops.onApprove(data).then(function() {
                     popUpClose(); // close the pop-up
                 });
             }

             function onCancelHandler(data) {
                 // call windows.xprops.onCancel and close the window
                 window.xprops.onCancel(data).then(function() {
                     popUpClose(); // close the pop-up
                 });
             }

             const { close, renderTo } = window.paypal.Auth({
                 client_id: '${ clientID }',
                 scope: '${ scopes }',
                 redirect_uri: '${ returnUrl }',
                 nonce: '${ cspNonce }',
                 sdkMeta: '${ sdkMeta }',
                 responseType: '${ responseType }',
                 onApprove: onApproveHandler,
                 onCancel: onCancelHandler,
             });
             // save the pop-up "method" into local var
             popUpClose = close;
             renderTo(window.parent);
         });
        </script>
    </body>
    `
);
