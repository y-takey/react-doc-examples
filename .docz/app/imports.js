export const imports = {
  'src/components/buttons/LinkButton/docz.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-buttons-link-button-docz" */ 'src/components/buttons/LinkButton/docz.mdx'),
  'src/components/buttons/PrimaryButton/docz.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-buttons-primary-button-docz" */ 'src/components/buttons/PrimaryButton/docz.mdx'),
}
