{
  description = "A template for PolyMTL INF2705";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, ... }@inputs: inputs.utils.lib.eachSystem [
    "x86_64-linux"
  ]
    (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfree = true;
        };
      in
      {
        devShells.default = pkgs.mkShell {
          name = "poly-c++-project";

          packages = with pkgs; [
            freeimage
            clang_17
            gnumake
            glm
            glbinding
            mesa
            glew
            glfw3
            SDL2
            SDL2.dev
          ];
        };
      });
}
