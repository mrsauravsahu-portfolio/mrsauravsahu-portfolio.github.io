subinclude("///pleasings//docker")

docker_image(
    name="build",
    srcs = glob(["*"], ["bin", "obj", "dist"]),
    dockerfile = "Dockerfile",
    visibility = ["//svc/parser/..."]
)
