sh_cmd(
  name = "compose",
  srcs = glob(["src/**/*", "package*"], ["node_modules"]),
  cmd = "docker-compose -f svc/portfolio/docker-compose.yml --project-name $PROJECT \\\$@",
  deps = ["//common/docker/node-dev:image"],
)
