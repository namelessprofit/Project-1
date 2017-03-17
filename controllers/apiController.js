function index(req, res) {

    res.json({
        message: "Welcome to Health Diary!",
        documentation_url: "https://github.com/namelessprofit/project-1",
        base_url: "localhost:3000",
        endpoints: [{
                method: "GET",
                path: "/",
                description: "Describes available endpoints"
            },
            {
                method: "POST",
                path: "/api/userEntry",
                controller: "controllerEntry.create"
            },
            {
                method: "DELETE",
                path: "/api/userEntry/:EntryId",
                controller: "controllerEntry.destroy"
            }

        ]
    });
}

module.exports = {
    index: index,
}
