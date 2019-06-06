import webapp2

class HomePage(webapp2.RequestHandler):
    def get(self):
        self.response.headers('Content-type')='text/html'
        self.response.write('<h3>hello, world</h3></br><p>this is so exciting</p>')

app=webapp2.WSGIApplication([('/',HomePage),],debug=True)
