subinclude("///pleasings//docker")

docker_image(
  name = "build",
  srcs = glob(["*"], ["node_modules", "dist"]),
  dockerfile = "Dockerfile",
  visibility = ["//svc/api/..."]
)
