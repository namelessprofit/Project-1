function index(req, res) {

    res.json({
       message: "Welcome to Health Diary!",
       documentation_url: "https://github.com/namelessprofit/project-1",
       base_url: "localhost:3000",
       endpoints : [
         {
           method: "GET", path: "/api",description: "Describes available endpoints" 
         }
       ]
     });
    }

    module.exports = {
        index: index
   }
