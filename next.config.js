const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    env: idProd ? {
        REACT_APP_API_COUNTRIES: 'https://steve-sanchez-world-data.herokuapp.com/api/world',
        GRAPHCMS_ENDPOINT: 'https://api-useast.graphcms.com/v1/ck6yl7b3kfvhh01dhda07ajzn/master',
        GRAPHCMS_TOKEN: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjoyLCJ0b2tlbklkIjoiYzAxYjVkOGMtY2Y4Zi00NThmLTlmOTUtODFlNzk3OTdjMmMxIiwiaWF0IjoxNTgyNDM3MzA3LCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyJ9.RQKg5Hg0lKTAZqxeIrAJRpUxp_v3HLPJJc9cgmX45whcJ0gtFq6eohPgwDTFCQTIiDeZOTuDW1LhZM2GoR5JeSJI_U2Kcm3aBHJaULVzXhXm1KYEHYjSrzk3VSyFapYSMvqUK-CihuekzHAGL2_0MMFfRiOV5UFHyvZ1KyqzuRUT8-TIhnog_D4PqBZvJoTBk498h_5hzO7bvOl-WIfv-DZ010X3G2zvGGL5fqxuMdOMGoPZnv7Ed_xCcCCoCMGCVGqeQwW4iSDOoAP_t1pxPAXuZU_gPn8FgkSHw6x0-mPMu8rq2MNwg5qCEP_PYeyyHR0ERQIePMcNE943mbe6LiA5YzIcgg-DQCxsebFY_Mp0cYpl-MgyFFPLyW8l8WXbLho2pIKsR5BhlwaXlNLdE9-twZZflWJn7IqxqIjepjdoys0w65tGIMVimb2q81f45eWreBIkDV8MzVF8CzMeLsHn9XqNhTQDaRRoMTcFeduK2wXDdcL3rNJTonZ2s1uHuaX78WjBKrSxopiePOhh8dFTerjtELI8XOPD6XerZoXxNC3nVpqOAN90jS5Uj3HhlF710ylvMdXz-V97Z2-373Jv5raZnVR07RhnIDB8_SK1MjuBP7Qz0q0fScFtgYs-hSAIMS-BaYliRY2bCkC0lJJr5V_6S_73IR8U0Rhe7Sc',
    } : {
        REACT_APP_API_COUNTRIES: 'http://localhost:3000/api/world',
        GRAPHCMS_ENDPOINT: 'https://api-useast.graphcms.com/v1/ck6yl7b3kfvhh01dhda07ajzn/master',
        GRAPHCMS_TOKEN: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjoyLCJ0b2tlbklkIjoiYzAxYjVkOGMtY2Y4Zi00NThmLTlmOTUtODFlNzk3OTdjMmMxIiwiaWF0IjoxNTgyNDM3MzA3LCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyJ9.RQKg5Hg0lKTAZqxeIrAJRpUxp_v3HLPJJc9cgmX45whcJ0gtFq6eohPgwDTFCQTIiDeZOTuDW1LhZM2GoR5JeSJI_U2Kcm3aBHJaULVzXhXm1KYEHYjSrzk3VSyFapYSMvqUK-CihuekzHAGL2_0MMFfRiOV5UFHyvZ1KyqzuRUT8-TIhnog_D4PqBZvJoTBk498h_5hzO7bvOl-WIfv-DZ010X3G2zvGGL5fqxuMdOMGoPZnv7Ed_xCcCCoCMGCVGqeQwW4iSDOoAP_t1pxPAXuZU_gPn8FgkSHw6x0-mPMu8rq2MNwg5qCEP_PYeyyHR0ERQIePMcNE943mbe6LiA5YzIcgg-DQCxsebFY_Mp0cYpl-MgyFFPLyW8l8WXbLho2pIKsR5BhlwaXlNLdE9-twZZflWJn7IqxqIjepjdoys0w65tGIMVimb2q81f45eWreBIkDV8MzVF8CzMeLsHn9XqNhTQDaRRoMTcFeduK2wXDdcL3rNJTonZ2s1uHuaX78WjBKrSxopiePOhh8dFTerjtELI8XOPD6XerZoXxNC3nVpqOAN90jS5Uj3HhlF710ylvMdXz-V97Z2-373Jv5raZnVR07RhnIDB8_SK1MjuBP7Qz0q0fScFtgYs-hSAIMS-BaYliRY2bCkC0lJJr5V_6S_73IR8U0Rhe7Sc',
    },
    assetPrefix: isProd ? '' : '',
}