/* @flow */
import { clientErrorResponse, htmlResponse, allowFrame, defaultLogger, sdkMiddleware, getCSPNonce, type ExpressMiddleware } from '../../lib';
import type { LoggerType, CacheType, InstanceLocationInformation } from '../../types';

import { htmlTemplate } from './htmlTemplate';


type AuthButtonMiddlewareOptions = {|
    logger : LoggerType,
    cache : CacheType,
    getInstanceLocationInformation : () => InstanceLocationInformation,
|};


export function getAuthButtonMiddleware({ logger = defaultLogger, cache, getInstanceLocationInformation } : AuthButtonMiddlewareOptions) : ExpressMiddleware {
    const locationInformation = getInstanceLocationInformation();
    return sdkMiddleware({ logger, cache, locationInformation }, {
        app: ({ req, res, params, meta }) => {
            logger.info(req, 'auth_button');
            const cspNonce = getCSPNonce(res);
            const {
                scopes,
                responseType,
                clientID,
                returnurl,
                customLabel,
                locale,
                style = {}
            } = params;

            if (!clientID) {
                logger.info(req, 'smart_buttons_render');
                return clientErrorResponse(res, 'Please provide a clientID query parameter');
            }

            const pageHTML = htmlTemplate({
                locale,
                cspNonce,
                style,
                customLabel,
                clientID,
                scopes,
                returnUrl: returnurl,
                sdkMeta:   meta,
                responseType
            });
            allowFrame(res);
            return htmlResponse(res, pageHTML);
        }
    });
}
