
const requestHandler  = (request, response) => {
    if (request.url === '/'){
        response.setHeader('Content-Type', 'text/html')
        response.write('<html>')
        response.write('<head><title>Message</title><head/>')
        response.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form><body/>')
        response.write('</html>')
        return response.end()
    }
    if (request.url === '/message' && request.method === 'POST') {
        const body = []
        request.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk)
        })
        request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody);

        })
        response.statusCode = 302
        response.setHeader('Location', '/')
        return response.end()
    }
}

export {requestHandler}