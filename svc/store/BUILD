sh_cmd(
  name = "build",
  srcs = glob(["*"], ["node_modules"]),
  cmd = "npm --prefix svc/store ci && npm --prefix svc/store start"
)

gentest(
  name = "test",
  test_cmd = "echo todo",
  no_test_output = True
)
