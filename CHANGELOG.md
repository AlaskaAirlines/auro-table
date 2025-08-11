# Semantic Release Automated Changelog

## [4.1.3](https://github.com/AlaskaAirlines/auro-table/compare/v4.1.2...v4.1.3) (2025-08-11)


### Bug Fixes

* auro library was causing aqua scan failures ([aca57b5](https://github.com/AlaskaAirlines/auro-table/commit/aca57b55aab0b8a48aef1743f671a4860691d808))

## [4.1.2](https://github.com/AlaskaAirlines/auro-table/compare/v4.1.1...v4.1.2) (2025-07-17)


### Bug Fixes

* add heading class to th ([7e0d6ca](https://github.com/AlaskaAirlines/auro-table/commit/7e0d6ca20912ef5a95be7218616893467bd5a774))
* add themeable type classes ([d52759b](https://github.com/AlaskaAirlines/auro-table/commit/d52759b0e29e75cad52389b3da7e37c5259f98f1))
* update docs head content ([5609336](https://github.com/AlaskaAirlines/auro-table/commit/560933624bbbaa672959ec519eaf267994088e70))
* update packages ([fdaeaaa](https://github.com/AlaskaAirlines/auro-table/commit/fdaeaaa577520513a1194e5444ea83fb62285eeb))

## [4.1.1](https://github.com/AlaskaAirlines/auro-table/compare/v4.1.0...v4.1.1) (2025-06-11)


### Bug Fixes

* make attribute data reactive [#114](https://github.com/AlaskaAirlines/auro-table/issues/114) ([6ac1550](https://github.com/AlaskaAirlines/auro-table/commit/6ac1550f48024c88cf8f3ceb7ef02192ab6ca1e8))

# [4.1.0](https://github.com/AlaskaAirlines/auro-table/compare/v4.0.1...v4.1.0) (2025-04-30)


### Features

* update to use new color theming tokens [#112](https://github.com/AlaskaAirlines/auro-table/issues/112) ([1704257](https://github.com/AlaskaAirlines/auro-table/commit/17042571ca799c1c0b40a5ad419c40eeda9c8823))

## [4.0.1](https://github.com/AlaskaAirlines/auro-table/compare/v4.0.0...v4.0.1) (2025-04-08)


### Performance Improvements

* add wca script for docs api ([8597a4e](https://github.com/AlaskaAirlines/auro-table/commit/8597a4ec7bf1e6aa7e57e74ba5fece75e59fe4cb))

# [4.0.0](https://github.com/AlaskaAirlines/auro-table/compare/v3.1.7...v4.0.0) (2025-02-28)


* feat!: move peer dependencies to "real" dependencies ([7a108d9](https://github.com/AlaskaAirlines/auro-table/commit/7a108d993e671e5771d3be386e8ed35733cf39c5))


### BREAKING CHANGES

* last change was breaking _on a patch version_ because of peer dependencies

Summary:
  Our current build process relies on peer dependencies being present, but
  the peer dependency pipeline is causing far more issues than it's worth.
  Why not just make them regular dependencies? This is what this PR does :)

## [3.1.7](https://github.com/AlaskaAirlines/auro-table/compare/v3.1.6...v3.1.7) (2025-02-08)


### Bug Fixes

* update semantic release branch reference ([b1fa290](https://github.com/AlaskaAirlines/auro-table/commit/b1fa290d94f54b67feb393767db972ec60c35128))


### Performance Improvements

* update dependencies ([aa459b7](https://github.com/AlaskaAirlines/auro-table/commit/aa459b776b278f1d50449207878ba29031b57534))
* update mixin to meet updated deps spec ([c818409](https://github.com/AlaskaAirlines/auro-table/commit/c818409660deacfb20a0bc5d153288a435d22938))
* update node to version 22 ([e9b99ee](https://github.com/AlaskaAirlines/auro-table/commit/e9b99eeea4fbe03c004563d3814159d42f73d2dc))

## [3.1.6](https://github.com/AlaskaAirlines/auro-table/compare/v3.1.5...v3.1.6) (2024-11-23)


### Bug Fixes

* update markdown partial pathing to consume new auro lib [#101](https://github.com/AlaskaAirlines/auro-table/issues/101) ([d26a2d7](https://github.com/AlaskaAirlines/auro-table/commit/d26a2d7953a2b36e6755d006ad232f6118b5ae1c))


### Performance Improvements

* add `nodeResolve` to rollup.config ([48e6529](https://github.com/AlaskaAirlines/auro-table/commit/48e65291ed9c60a48b7131d6ce833edcbe10d411))
* package lock out of sync [#101](https://github.com/AlaskaAirlines/auro-table/issues/101) ([a218e30](https://github.com/AlaskaAirlines/auro-table/commit/a218e30b7a4e797da2756f4711cd6ade4f155acd))
* update library to `3.0.2` ([b783620](https://github.com/AlaskaAirlines/auro-table/commit/b7836201f62f8ecd8d03d626fb0c9ea3a74aa437))

## [3.1.5](https://github.com/AlaskaAirlines/auro-table/compare/v3.1.4...v3.1.5) (2024-11-01)


### Performance Improvements

* warap column generator in if ([0a017d1](https://github.com/AlaskaAirlines/auro-table/commit/0a017d1b8585c9b76fed4d932872ec4ac95175e8))

## [3.1.4](https://github.com/AlaskaAirlines/auro-table/compare/v3.1.3...v3.1.4) (2024-11-01)


### Performance Improvements

* check for headers before generating rows ([85252bf](https://github.com/AlaskaAirlines/auro-table/commit/85252bf034d95f4eafad8f4caf2acc9b1925de67))

## [3.1.3](https://github.com/AlaskaAirlines/auro-table/compare/v3.1.2...v3.1.3) (2024-11-01)


### Performance Improvements

* refactor how we render the table rows ([c11249e](https://github.com/AlaskaAirlines/auro-table/commit/c11249e58265ae84ed3b6284756238cd17a2b301))

## [3.1.2](https://github.com/AlaskaAirlines/auro-table/compare/v3.1.1...v3.1.2) (2024-11-01)


### Performance Improvements

* refactor header generation ([a3ba3e7](https://github.com/AlaskaAirlines/auro-table/commit/a3ba3e730ade5c19c81b5e948c120e329de22838))

## [3.1.1](https://github.com/AlaskaAirlines/auro-table/compare/v3.1.0...v3.1.1) (2024-10-31)


### Bug Fixes

* remove .map function that doesn't work in SSR support [#94](https://github.com/AlaskaAirlines/auro-table/issues/94) ([ce1d30e](https://github.com/AlaskaAirlines/auro-table/commit/ce1d30ed73ad8f3f87366302c3e139211ad5def6))

# [3.1.0](https://github.com/AlaskaAirlines/auro-table/compare/v3.0.1...v3.1.0) (2024-10-21)


### Features

* **api:** add register static method [#92](https://github.com/AlaskaAirlines/auro-table/issues/92) ([96d0069](https://github.com/AlaskaAirlines/auro-table/commit/96d00699534ebd2fbc4043dd2e3b0445c74653db))

## [3.0.1](https://github.com/AlaskaAirlines/auro-table/compare/v3.0.0...v3.0.1) (2024-10-09)


### Bug Fixes

* make auro-library a normal dep instead of devDep ([c0d29ad](https://github.com/AlaskaAirlines/auro-table/commit/c0d29ad37af639964544b2502a5f68459af02b44))

# [3.0.0](https://github.com/AlaskaAirlines/auro-table/compare/v2.1.5...v3.0.0) (2024-09-30)


### Features

* add tag name as attribute when custom registered ([7ab1b88](https://github.com/AlaskaAirlines/auro-table/commit/7ab1b88f34cb8bbb70d63e7ffd685dcbeca0f6ce))
* refactor color token structure with tier 3 tokens [#82](https://github.com/AlaskaAirlines/auro-table/issues/82) ([0a2da91](https://github.com/AlaskaAirlines/auro-table/commit/0a2da9107a731a7a0c126cb869d084665306b8e8))


### Performance Improvements

* refactor custom component registration config ([c10f874](https://github.com/AlaskaAirlines/auro-table/commit/c10f874255b79c0fbb04cadaac0fa789b6ab7f01))
* update build configurations and dependencies ([a60adc8](https://github.com/AlaskaAirlines/auro-table/commit/a60adc83728825d8aa59c38e45edc5507e2c32f7))
* update dependencies ([ca7deb5](https://github.com/AlaskaAirlines/auro-table/commit/ca7deb54a980ebafaa0d9258cb14a17e70bed4f3))


### BREAKING CHANGES

* trigger major release for color theme support #82

## [2.1.5](https://github.com/AlaskaAirlines/auro-table/compare/v2.1.4...v2.1.5) (2024-02-19)


### Performance Improvements

* **docs:** fix broken API page) ([d3b6347](https://github.com/AlaskaAirlines/auro-table/commit/d3b634713f4ce29956f1aec833fff995aec489d7))

## [2.1.4](https://github.com/AlaskaAirlines/auro-table/compare/v2.1.3...v2.1.4) (2024-02-18)


### Performance Improvements

* **docs:** rename apiExamples.md to use standard name ([080b701](https://github.com/AlaskaAirlines/auro-table/commit/080b70121d17409ee3b7b7ad51f83a28c7be819d))

## [2.1.3](https://github.com/AlaskaAirlines/auro-table/compare/v2.1.2...v2.1.3) (2024-02-13)


### Bug Fixes

* update js ref from index ([866c067](https://github.com/AlaskaAirlines/auro-table/commit/866c067d48ecf8df64ff7a67c4dbc673773a527b))

## [2.1.2](https://github.com/AlaskaAirlines/auro-table/compare/v2.1.1...v2.1.2) (2024-02-13)


### Performance Improvements

* update auro deps and add ESM badge ([cb9cba8](https://github.com/AlaskaAirlines/auro-table/commit/cb9cba8105b9f7a6600472c898015e6285b288d3))

## [2.1.1](https://github.com/AlaskaAirlines/auro-table/compare/v2.1.0...v2.1.1) (2024-01-31)


### Performance Improvements

* alaskaairux ref updates ([2c8181c](https://github.com/AlaskaAirlines/auro-table/commit/2c8181c1bfb24ba4288224e810829f2d7a9991d9))

# [2.1.0](https://github.com/AlaskaAirlines/auro-table/compare/v2.0.1...v2.1.0) (2024-01-21)


### Features

* add suport for SSR projects [#76](https://github.com/AlaskaAirlines/auro-table/issues/76) ([51946fe](https://github.com/AlaskaAirlines/auro-table/commit/51946fe3f51ff73161e1f05c8e324a8df2797b3a))


### Performance Improvements

* update to support node policy ([714e168](https://github.com/AlaskaAirlines/auro-table/commit/714e168186d0b77bc006c767a5a75dbc4efb1721))

## [2.0.1](https://github.com/AlaskaAirlines/auro-table/compare/v2.0.0...v2.0.1) (2023-11-13)


### Performance Improvements

* **token:** update token per new theming [#74](https://github.com/AlaskaAirlines/auro-table/issues/74) ([60531a5](https://github.com/AlaskaAirlines/auro-table/commit/60531a58c22c395908dd9e3072f6233f6c12c5df))

# [2.0.0](https://github.com/AlaskaAirlines/auro-table/compare/v1.0.2...v2.0.0) (2023-07-26)


### Performance Improvements

* **component:** rebuild component with lit 2 and node 18 [#14](https://github.com/AlaskaAirlines/auro-table/issues/14) ([add80c1](https://github.com/AlaskaAirlines/auro-table/commit/add80c1bb16ec09e9e3316c1ce6f319217d63d8d))


### BREAKING CHANGES

* **component:** This commit includes the following:

- npm namespace updated to @aurodesignsystem
- remove stale issue templates
- remove default slot
