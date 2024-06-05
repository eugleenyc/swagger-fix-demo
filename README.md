### Defect
How to see the defect:
- clone the repo
- run `npm install`
- run `npm start`
- go to `http://localhost:3000/yaml`

The resulting yaml will show the following:
```
openapi: 3.0.0
paths:
  /:
    get:
      operationId: AppController_getHello
      parameters:
        - name: testHeader
          required: true
          in: header
          description: test description
          schema:
            enum:
              - an enum
            type: string
      responses:
        '200':
          description: ''
info:
  title: demo project
  description: demo project description
  version: '1.0'
  contact: {}
tags:
  - name: demo
    description: ''
servers: []
components:
  schemas: {}
```

This is not correct as in the [controller](https://github.com/eugleenyc/swagger-fix-demo/blob/28d217d4170c01a9865f39b66a8163aed4086ef4/src/app.controller.ts#L16) it specifies a default value.

### Fix
As outline in the repo [here](https://github.com/eugleenyc/swagger) for the potential swagger fix.
If you include a spread operator in the code outlined [here](https://github.com/eugleenyc/swagger/blob/9fddb4bc75f3ba03d682ab185be9c32056b010a9/lib/decorators/api-property.decorator.ts#L28)

![Screenshot 2024-06-05 at 8 31 43 AM](https://github.com/eugleenyc/swagger-fix-demo/assets/40117342/a98976a8-b5e9-4644-aa67-9a1c92f85a29)

It will now return the resulting correct yaml file:
```
openapi: 3.0.0
paths:
  /:
    get:
      operationId: AppController_getHello
      parameters:
        - name: testHeader
          required: true
          in: header
          description: test description
          schema:
            type: string
            default: default param
            enum:
              - an enum
      responses:
        '200':
          description: ''
info:
  title: demo project
  description: demo project description
  version: '1.0'
  contact: {}
tags:
  - name: demo
    description: ''
servers: []
components:
  schemas: {}
```
