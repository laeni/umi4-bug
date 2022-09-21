// https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  /**
   * @name 开启 hash 模式
   * @description 让 build 之后的产物包含 hash 后缀。通常用于增量发布和避免浏览器加载缓存。
   * @doc https://umijs.org/docs/api/config#hash
   */
  hash: true,
  /**
   * @name 主题的配置
   * @description 虽然叫主题，但是其实只是 less 的变量设置
   * @doc antd的主题设置 https://ant.design/docs/react/customize-theme-cn
   * @doc umi 的theme 配置 https://umijs.org/docs/api/config#theme
   */
  theme: {
    // 如果不想要 configProvide 动态设置主题需要把这个设置为 default
    // 只有设置为 variable， 才能使用 configProvide 动态设置主色调
    // https://ant.design/docs/react/customize-theme-variable-cn
    'root-entry-name': 'default',
  },
  /**
   * @name moment 的国际化配置
   * @description 如果对国际化没有要求，打开之后能减少js的包大小
   * @doc https://umijs.org/docs/api/config#ignoremomentlocale
   */
  ignoreMomentLocale: true,
  /**
   * @name 开启 build 时生成额外的 manifest 文件，用于描述产物
   * @@doc https://umijs.org/docs/api/config#manifest
   */
  manifest: {
    basePath: '/',
  },
  /**
   * @name 快速热更新配置
   * @description 一个不错的热更新组件，更新时可以保留 state
   */
  fastRefresh: true,

  /**
   * @name 设置代码中的可用变量
   * @@doc https://umijs.org/docs/api/config#define
   */
  // define: { PROJECT_NAME: defaultSettings.title },

  /**
   * @name 开启后，可通过 Option+Click 点击组件跳转至编辑器源码位置，Option+Right-click 可以打开上下文，查看父组件
   * @@doc https://umijs.org/docs/api/config#clicktocomponent
   */
  // clickToComponent: {},

  /**
   * @name 设置代码中的可用变量
   * @@doc https://umijs.org/docs/api/config#define
   */
  define: {},

  /**
   * @name 检测未使用的文件和导出，仅在 build 阶段开启
   * @@doc https://umijs.org/docs/api/config#deadcode
   */
  // deadCode: {},

  plugins: [
    '@umijs/plugins/dist/locale',
    '@umijs/plugins/dist/model',
    '@umijs/plugins/dist/request',
    '@umijs/plugins/dist/moment2dayjs',
  ],
  moment2dayjs: {
    preset: 'none',
  },
  /**
   * @name 数据流插件
   * @@doc https://umijs.org/docs/max/data-flow
   */
  model: {},
  /**
   * @name 网络请求配置
   * @description 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
   * @doc https://umijs.org/docs/max/request
   */
  request: {},
  /**
   * @name 国际化插件
   * @doc https://umijs.org/docs/max/i18n
   */
  locale: {
    default: 'en-US',
    antd: false,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: false,
  },
  ssr: {},
});
