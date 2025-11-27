{
  description = "My LCOLONQ Cyberspace";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
  };

  outputs = {
    self,
    nixpkgs,
    ...
  }: let
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
  in {
    devShells.${system}.default = pkgs.mkShell {
      packages = with pkgs; [
        python3
      ];

      shellHook = ''
        python3 -m http.server
      '';
    };

    formatter.${system} = pkgs.alejandra;
  };
}
