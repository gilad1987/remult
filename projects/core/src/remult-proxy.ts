import type { ClassType } from '../classType.js'
import type {
  Allowed,
  AllowedForInstance,
  ApiClient,
  GetArguments,
  Remult,
  RemultContext,
  UserInfo,
} from './context.js'
import type { DataProvider } from './data-interfaces.js'
import type { LiveQueryClient } from './live-query/LiveQueryClient.js'
import type {
  LiveQueryChangesListener,
  LiveQueryStorage,
  SubscriptionServer,
} from './live-query/SubscriptionServer.js'
import { defaultFactory, remultStatic } from './remult-static.js'
import type { Repository } from './remult3/remult3.js'
import { getInternalKey } from './remult3/repository-internals.js'

/*@internal*/
export class RemultProxy implements Remult {
  /* @internal*/
  get liveQuerySubscriber() {
    return this.remultFactory().liveQuerySubscriber
  }
  /* @internal*/
  set liveQuerySubscriber(val: LiveQueryClient) {
    this.remultFactory().liveQuerySubscriber = val
  }

  /* @internal*/
  get liveQueryStorage() {
    return this.remultFactory().liveQueryStorage!
  }
  /* @internal*/
  set liveQueryStorage(val: LiveQueryStorage) {
    this.remultFactory().liveQueryStorage = val
  }

  /* @internal*/
  get liveQueryPublisher() {
    return this.remultFactory().liveQueryPublisher
  }
  /* @internal*/
  set liveQueryPublisher(val: LiveQueryChangesListener) {
    this.remultFactory().liveQueryPublisher = val
  }
  call<T extends (...args: any[]) => Promise<any>>(
    backendMethod: T,
    self?: any,
    ...args: GetArguments<T>
  ): ReturnType<T> {
    return this.remultFactory().call(backendMethod, self, ...args)
  }
  get context(): RemultContext {
    return this.remultFactory().context
  }

  get dataProvider(): DataProvider {
    return this.remultFactory().dataProvider
  }
  set dataProvider(provider: DataProvider) {
    this.remultFactory().dataProvider = provider
  }
  /*@internal*/
  get repCache(): Map<DataProvider, Map<ClassType<any>, Repository<any>>> {
    return this.remultFactory().repCache
  }

  authenticated(): boolean {
    return this.remultFactory().authenticated()
  }
  isAllowed(roles?: Allowed): boolean {
    return this.remultFactory().isAllowed(roles)
  }
  isAllowedForInstance(
    instance: any,
    allowed?: AllowedForInstance<any>,
  ): boolean {
    return this.remultFactory().isAllowedForInstance(instance, allowed)
  }

  clearAllCache() {
    return this.remultFactory().clearAllCache()
  }
  /*@internal*/
  remultFactory = () => defaultFactory()

  /*@internal*/
  resetFactory() {
    this.remultFactory = () => defaultFactory()
  }

  private repoCache = new Map<
    ClassType<any>,
    Map<DataProvider, Repository<any>>
  >()
  //@ts-ignore
  repo: Remult['repo'] = (...args) => {
    let self = this
    let entityCache = self.repoCache.get(args[0])
    if (!entityCache) {
      self.repoCache.set(args[0], (entityCache = new Map()))
    }
    let result = entityCache.get(args[1]!)
    if (result) return result
    result = {
      get fields() {
        return self.remultFactory().repo(...args).metadata.fields
      },
      //@ts-ignore
      [getInternalKey]() {
        return self
          .remultFactory()
          .repo(...args)
          [getInternalKey]()
      },
      relations: (args2) =>
        self
          .remultFactory()
          .repo(...args)
          .relations(args2),
      validate: (a, ...b) =>
        self
          .remultFactory()
          .repo(...args)
          //@ts-ignore
          .validate(a, ...b),
      addEventListener: (...args2) =>
        self
          .remultFactory()
          .repo(...args)
          .addEventListener(...args2),
      count: (...args2) =>
        self
          .remultFactory()
          .repo(...args)
          .count(...args2),
      create: (...args2) =>
        self
          .remultFactory()
          .repo(...args)
          .create(...args2),
      delete: (args2) =>
        self
          .remultFactory()
          .repo(...args)
          .delete(args2),
      find: (...args2) =>
        self
          .remultFactory()
          .repo(...args)
          .find(...args2),
      findFirst: (...args2) =>
        self
          .remultFactory()
          .repo(...args)
          .findFirst(...args2),
      findOne: (...args2) =>
        self
          .remultFactory()
          .repo(...args)
          .findOne(...args2),
      findId: (a, b) =>
        self
          .remultFactory()
          .repo(...args)
          .findId(a as any, b),
      //@ts-ignore
      toJson: (json: any) =>
        self
          .remultFactory()
          .repo(...args)
          .toJson(json),
      fromJson: (item, isNew) =>
        self
          .remultFactory()
          .repo(...args)
          .fromJson(item, isNew),
      getEntityRef: (...args2) =>
        self
          .remultFactory()
          .repo(...args)
          .getEntityRef(...args2),
      insert: (args2) =>
        self
          .remultFactory()
          .repo(...args)
          .insert(args2),
      liveQuery: (...args2) =>
        self
          .remultFactory()
          .repo(...args)
          .liveQuery(...args2),
      get metadata() {
        return self.remultFactory().repo(...args).metadata
      },
      query: (...args2) =>
        self
          .remultFactory()
          .repo(...args)
          .query(...args2),
      save: (args2) =>
        self
          .remultFactory()
          .repo(...args)
          .save(args2),
      update: (a, b) =>
        self
          .remultFactory()
          .repo(...args)
          .update(a, b),
    }
    entityCache.set(args[1]!, result!)
    return result
  }

  get user() {
    return this.remultFactory().user
  }
  set user(info: UserInfo | undefined) {
    this.remultFactory().user = info
  }
  get apiClient(): ApiClient {
    return this.remultFactory().apiClient
  }
  set apiClient(client: ApiClient) {
    this.remultFactory().apiClient = client
  }
  get subscriptionServer() {
    return this.remultFactory().subscriptionServer!
  }
  set subscriptionServer(value: SubscriptionServer) {
    this.remultFactory().subscriptionServer = value
  }
}

export const remult: Remult = new RemultProxy()
