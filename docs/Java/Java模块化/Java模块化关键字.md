---
title: 附录：Java模块化关键字
---
# Java模块化关键字及使用场景示例

Java自JDK9起支持模块化，以下是Java模块化关键字及对应的使用场景示例：

## exports

`exports`用于导出一个包，使得其他模块可以访问该包内的公共类型和成员。

例如，假设我们有一个包名为`com.example`，并且这个包中包含了一个公共类`ExampleClass`，我们可以在`module-info.java`文件中使用以下代码：

```java:no-line-numbers
module com.mymodule {
    exports com.example;
}

```

这样，其他模块就可以使用`com.example`包内的`ExampleClass`类。

## requires

`requires`用于声明一个模块依赖关系，使得当前模块可以使用被依赖模块中导出的公共类型和成员。

例如，假设我们的模块依赖了一个名为`mylibrary`的模块并使用该模块中的类`LibraryClass`，我们可以在`module-info.java`文件中使用以下代码：

```java:no-line-numbers
module com.mymodule {
    requires mylibrary;
}

```

这样，我们的模块就可以使用`mylibrary`模块中导出的`LibraryClass`类。

## opens

`opens`用于打开一个包，使得其他模块可以使用反射来访问该包内的非公共类型和成员。

例如，假设我们有一个包名为`com.example`，并且这个包中包含了一个非公共类`ExampleClass`，我们可以在`module-info.java`文件中使用以下代码：

```java:no-line-numbers
module com.mymodule {
    opens com.example;
}

```

这样，其他模块就可以使用反射来访问`com.example`包内的`ExampleClass`类。

## uses

`uses`用于声明一个服务使用，使得当前模块可以使用该服务提供的实现。

例如，假设我们的模块需要使用一个名为`MyService`的服务，我们可以在`module-info.java`文件中使用以下代码：

```java:no-line-numbers
module com.mymodule {
    uses com.example.MyService;
}

```

这样，我们的模块就可以使用`MyService`服务提供的实现。

## provides

`provides`用于声明一个服务的提供者，使得其他模块可以使用该服务提供者的实现。

例如，假设我们的模块提供了一个名为`MyService`的服务的实现类`MyServiceImpl`，我们可以在`module-info.java`文件中使用以下代码：

```java:no-line-numbers
module com.mymodule {
    provides com.example.MyService with com.example.MyServiceImpl;
}

```

这样，其他模块就可以使用`MyService`服务提供的`MyServiceImpl`实现类。

## provides...with

`provides...with`用于声明一个服务的提供者，使得其他模块可以使用该服务提供者的实现。

例如，假设我们的模块提供了一个名为`MyService`的服务的实现类`MyServiceImpl`，我们可以在`module-info.java`文件中使用以下代码：

```java:no-line-numbers
module com.mymodule {
    provides com.example.MyService with com.example.MyServiceImpl;
}

```

这样，其他模块就可以使用`MyService`服务提供的`MyServiceImpl`实现类。

## transitive

`transitive`用于声明一个模块依赖关系，并将该模块的依赖传递给当前模块的依赖模块。

例如，假设我们的模块依赖了一个名为`mylibrary`的模块，并且该模块又依赖了一个名为`myotherlibrary`的模块，我们可以在`module-info.java`文件中使用以下代码：

```java:no-line-numbers
module com.mymodule {
    requires transitive mylibrary;
}

```

这样，`myotherlibrary`模块也会成为我们的模块的依赖模块。

## requires static

`requires static`用于声明一个可选的模块依赖关系，该依赖关系只有在使用了该模块提供的某些特定功能时才会被加载。

例如，假设我们的模块需要使用一个名为`mylibrary`的模块提供的可选功能`myfeature`，我们可以在`module-info.java`文件中使用以下代码：

```java:no-line-numbers
module com.mymodule {
    requires static mylibrary;
}

```

这样，当我们使用了`mylibrary`模块提供的`myfeature`功能时，`mylibrary`模块才会被加载。

## qualified exports

`qualified exports`用于导出一个包的特定部分，使得其他模块只能访问该部分的公共类型和成员。

例如，假设我们有一个包名为`com.example`，并且这个包中包含了一个公共类`ExampleClass`和一个非公共类`ExampleInternalClass`，我们可以在`module-info.java`文件中使用以下代码：

```java:no-line-numbers
module com.mymodule {
    qualified exports com.example.internal to myothermodule;
}

```

这样，只有`myothermodule`模块可以访问`com.example`包内的`ExampleInternalClass`类，其他模块只能访问`com.example`包内的`ExampleClass`类。

## to

`to`用于声明一个服务实现类的目标模块，使得该服务提供者的实现只能被目标模块使用。

例如，假设我们的模块提供了一个名为`MyService`的服务的实现类`MyServiceImpl`，我们可以在`module-info.java`文件中使用以下代码：

```java:no-line-numbers
module com.mymodule {
    provides com.example.MyService with com.example.MyServiceImpl to myothermodule;
}

```

这样，`MyServiceImpl`实现类只能被`myothermodule`模块使用。


## requires transitive

`requires transitive`用于声明一个模块依赖关系，并将该模块的依赖传递给当前模块的依赖模块。

例如，假设我们的模块依赖了一个名为`mylibrary`的模块，并且该模块又依赖了一个名为`myotherlibrary`的模块，我们可以在`module-info.java`文件中使用以下代码：

```java:no-line-numbers
module com.mymodule {
    requires transitive mylibrary;
}

```

这样，`myotherlibrary`模块也会成为我们的模块的依赖模块。

## opens...to

`opens...to`用于打开一个包，使得其他模块可以使用反射来访问该包内的非公共类型和成员，并指定可以访问该包的模块。

例如，假设我们有一个包名为`com.example`，并且这个包中包含了一个非公共类`ExampleClass`，我们可以在`module-info.java`文件中使用以下代码：

```java:no-line-numbers
module com.mymodule {
    opens com.example to myothermodule;
}

```

这样，`myothermodule`模块就可以使用反射来访问`com.example`包内的`ExampleClass`类。

## exports...to

`exports...to`用于导出一个包，并指定可以访问该包的模块。

例如，假设我们有一个包名为`com.example`，并且这个包中包含了一个公共类`ExampleClass`，我们可以在`module-info.java`文件中使用以下代码：

```java:no-line-numbers
module com.mymodule {
    exports com.example to myothermodule;
}

```

这样，只有`myothermodule`模块可以访问`com.example`包内的`ExampleClass`类。

## transitive exports

`transitive exports`用于导出一个包，并将该包的访问权限传递给当前模块的依赖模块。

例如，假设我们有一个包名为`com.example`，并且这个包中包含了一个公共类`ExampleClass`，我们可以在`module-info.java`文件中使用以下代码：

```java:no-line-numbers
module com.mymodule {
    exports com.example to mylibrary;
    requires transitive mylibrary;
}

```

这样，`mylibrary`模块也能访问`com.example`包内的`ExampleClass`类。