/* @flow */

import { clientErrorResponse, htmlResponse, allowFrame, defaultLogger, safeJSON, sdkMiddleware,
    isLocalOrTest, type ExpressMiddleware } from '../../lib';
import type { LoggerType, CacheType, SDKVersionManager } from '../../types';

import { EVENT, VENMO_BLUE } from './constants';
import { getParams } from './params';
import { getSmartQRCodeClientScript } from './script';
import { QRCode } from './node-qrcode';


type QRcodeMiddlewareOptions = {|
    logger? : LoggerType,
    cache? : CacheType,
    cdn? : boolean,
    spbVersionManager: SDKVersionManager
|};

export function getQRCodeMiddleware({ logger = defaultLogger, cache, cdn = !isLocalOrTest(), spbVersionManager } : QRcodeMiddlewareOptions = {}) : ExpressMiddleware {
    const useLocal = !cdn;

    return sdkMiddleware({ logger }, {
        app: async ({ req, res, params, meta, logBuffer }) => {
            logger.info(req, EVENT.RENDER);

            const { cspNonce, qrPath, debug } = getParams(params, req, res);

            if (!qrPath) {
                return clientErrorResponse(res, 'Please provide a qrPath query parameter');
            }

            const svgString = await QRCode.toString(
                qrPath,
                {
                    // width: 160,
                    // width:  240,
                    margin: 0,
                    color:  {
                        dark:  VENMO_BLUE,
                        light: '#FFFFFF'
                    }
                }
            );

            const clientScript = await getSmartQRCodeClientScript({ debug, logBuffer, cache, useLocal, spbVersionManager });
            const spbVersion = spbVersionManager.getLiveVersion()

            logger.info(req, `qrcode_client_version_${ spbVersion }`);
            logger.info(req, `qrcode_params`, { params: JSON.stringify(params) });

            const pageHTML = `
            <!DOCTYPE html>
            <head>
                <link 
                    nonce="${ cspNonce }"
                    rel="stylesheet" 
                    href="https://www.paypalobjects.com/paypal-ui/web/fonts-and-normalize/1-1-0/fonts-and-normalize.min.css"
                />
            </head>
            <body data-nonce="${ cspNonce }" data-client-version="${ spbVersion }">
                ${ meta.getSDKLoader({ nonce: cspNonce }) }
                <script nonce="${ cspNonce }">${ clientScript }</script>
                <script nonce="${ cspNonce }">
                    spbQRCode.renderQRCode(${ safeJSON({ svgString }) });
                </script>
            </body>
        `;

            allowFrame(res);
            return htmlResponse(res, pageHTML);
        }
    });
}
