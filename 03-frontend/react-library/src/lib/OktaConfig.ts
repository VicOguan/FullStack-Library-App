export const oktaConfig={
    clientId: '0oa8oh4mt8whaXzlH5d7',
    issuer: 'https://dev-49769423.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}