
type RegistryItem = {
  name: string;
  dependencies?: string[];
  devDependencies?: string[];
  registryDependencies?: string[];
  files?: { path: string; content: string, type: string, target: string }[];
};

type PreviewProps = {
  name: string;
  code: string;
  dependencies?: Record<string, string>;
  registryDependencies?: string[];
  externalDependencies?: string[] | Record<string, string>;
};

// Caches to avoid repeated imports
const registryCache = new Map<string, RegistryItem>();
const packageCache = new Map<string, any>();

const parseShadcnHooks = async (results: any, name: string) => {
  let registry = registryCache.get(name);
  if (!registry) {
    registry = (await import(
      `./components/preview/shadcn/${name}.json`
    )) as RegistryItem;
    registryCache.set(name, registry);
  }

  registry?.files?.map((file: any) => {
    results.files[file.target] = file.content;
  });

  if (registry?.dependencies?.length) {
    const dependencies = registry?.dependencies?.reduce((acc: any, curr: any) => {
      acc[curr] = 'latest';
      return acc;
    }, {});

    Object.assign(results.dependencies, dependencies);
  }

  if (registry?.devDependencies?.length) {
    const devDependencies = registry?.devDependencies?.reduce((acc: any, curr: any) => {
      acc[curr] = 'latest';
      return acc;
    }, {});

    Object.assign(results.devDependencies, devDependencies);
  }

  if (registry.registryDependencies?.length) {
    for (let index = 0; index < registry.registryDependencies.length; index++) {
      const dependency = registry.registryDependencies[index];
      let mod = registryCache.get(dependency.replace('.json', ''));

      if (!mod) {
        mod = (await import(
          `./components/preview/shadcn/${dependency?.includes('json') ? dependency : `${dependency}.json`}`
        )).default as RegistryItem;
        registryCache.set(dependency.replace('.json', ''), mod as RegistryItem);
        if (mod?.name) {
          await parseShadcnHooks(results, mod?.name);
        }
      } else {
        mod?.files?.map((file: any) => {
          results.files[file.target] = file.content;
        });
      }

    }
  }
}


const parseShadcnComponentToSandbox = async ({ name, code, registryDependencies }: any) => {
  const results = {
    files: {} as Record<string, string>,
    dependencies: {} as Record<string, string>,
    devDependencies: {} as Record<string, string>,
  }
  // // Set up initial files
//   Object.assign(results.files, {
//     '/App.tsx': `
// import './styles/globals.css';

//     ${code}
//     `,
//     // '/tsconfig.json': tsconfig,
//     // '/lib/utils.ts': utils,
//     // '/lib/public/content.ts': content,
//   });

  await parseShadcnHooks(results, name);

  if (registryDependencies?.length) {
    for (let index = 0; index < registryDependencies.length; index++) {
      const dependency = registryDependencies[index];
      let mod = registryCache.get(dependency.replace('.json', ''));

      if (mod) {
        continue;
      }

      if (!mod) {
        mod = (await import(
          `./components/preview/shadcn/${dependency?.includes('json') ? dependency : `${dependency}.json`}`
        )).default as RegistryItem;
        registryCache.set(dependency.replace('.json', ''), mod as RegistryItem);
      }

      if (mod?.name) {
        await parseShadcnHooks(results, mod?.name);
      }
    }
  }

  return results;
}

const init = async ({
  name, code, registryDependencies
}: any) => {
  const result = {
    files: {} as Record<string, string>,
    dependencies: {} as Record<string, string>,
    devDependencies: {} as Record<string, string>,
  }

  const dataCache = packageCache.get(name);

  if (dataCache) {
    const { files, dependencies, devDependencies } = dataCache;
    result.files = files;
    result.dependencies = dependencies;
    result.devDependencies = devDependencies;
  } else {
  const { files, dependencies, devDependencies } = await parseShadcnComponentToSandbox({
    name, code, registryDependencies
  });
  packageCache.set(name, { files, dependencies, devDependencies });
  result.files = files;
  result.dependencies = dependencies;
  result.devDependencies = devDependencies;
  }



  registryCache.clear();

  return result;
}

(async () => {
  const r = await init({
  name: 'useClickAway',
  code: 'HUNG'
})
  const r1 = await init({
  name: 'useClickAway',
  code: 'HUNG'
})
  const r2 = await init({
  name: 'useClickAway',
  code: 'HUNG'
})

  console.log(Object.keys(r.files));
  console.log(Object.keys(r1.files));
  console.log(Object.keys(r2.files));

})()
