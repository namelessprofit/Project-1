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
                controllerEntry.create
            },
            {
                method: "DELETE",
                path: "/api/entry/:EntryId",
                controllerEntry.destroy
            }

        ]
    });
}

module.exports = {
    index: index
    create: create
    destroy:destroy
}
