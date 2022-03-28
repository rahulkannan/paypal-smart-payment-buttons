/* @flow */
let cplPhases;

type LogServerSideCPLParams = {|
    phase : string,
    category : string,
    isStart : ?boolean
|};

type CPLPhasesType = {|
    query : Object,
    comp : Object,
    chunk : Object
|};


/**
 * Log performance metrics to send later
 * @param {String} phase
 * @param {String} category
 * @param {Boolean} isStart
 * @returns {Object}
 */
export const logServerSideCPL = ({ phase, category, isStart } : LogServerSideCPLParams) : CPLPhasesType => {
    if (!cplPhases) {
        cplPhases = {
            query: {},
            chunk: {},
            comp:  {}
        };
    }
    const epochNow = Date.now();
    if (category && cplPhases[category] && phase) {
        if (isStart && !cplPhases[category][phase]) {
            cplPhases[category][phase] = {
                start: epochNow
            };
        } else if (cplPhases[category][phase]) {
            if (
                cplPhases[category][phase].start &&
                !cplPhases[category][phase].tt
            ) {
                cplPhases[category][phase].tt =
                    epochNow - cplPhases[category][phase].start;
            }
        }
    }
    return cplPhases;
};
