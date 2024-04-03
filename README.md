To run React-Native project you should have installed tools for this. If u didn't install please follow this [topic](https://reactnative.dev/docs/environment-setup?platform=android) to install all tools and configure them.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

### For Android

To run Android, run the following command from the _root_.

```bash
yarn android
```

### For iOS

To run iOS, you need install pods, run following command in _ios_ folder.

```bash
pod install
```

For Apple ARM processors you may use this command.

```bash
arch -x86_64 pod install
```

After pods install run the following command from the _root_.

```bash
yarn ios
```
