/* eslint-disable graphile-export/export-instances, graphile-export/export-methods, graphile-export/exhaustive-deps */
import { constant, lambda, node, rootValue } from "grafast";
import { GraphQLID, GraphQLInterfaceType, GraphQLNonNull, GraphQLObjectType, GraphQLSchema } from "graphql";
const Query_query_extensions = Object.assign(Object.create(null), {
  grafast: {
    plan() {
      return rootValue();
    }
  }
});
const handler = {
  typeName: "Query",
  codec: {
    name: "raw",
    encode: Object.assign(function rawEncode(value) {
      return typeof value === "string" ? value : null;
    }, {
      isSyncAndSafe: true
    }),
    decode: Object.assign(function rawDecode(value) {
      return typeof value === "string" ? value : null;
    }, {
      isSyncAndSafe: true
    })
  },
  match(specifier) {
    return specifier === "query";
  },
  getSpec() {
    return "irrelevant";
  },
  get() {
    return rootValue();
  },
  plan() {
    return constant`query`;
  }
};
const nodeIdCodecs = Object.assign(Object.create(null), {
  raw: handler.codec,
  base64JSON: {
    name: "base64JSON",
    encode: (() => {
      function base64JSONEncode(value) {
        return Buffer.from(JSON.stringify(value), "utf8").toString("base64");
      }
      base64JSONEncode.isSyncAndSafe = true; // Optimization
      return base64JSONEncode;
    })(),
    decode: (() => {
      function base64JSONDecode(value) {
        return JSON.parse(Buffer.from(value, "base64").toString("utf8"));
      }
      base64JSONDecode.isSyncAndSafe = true; // Optimization
      return base64JSONDecode;
    })()
  },
  pipeString: {
    name: "pipeString",
    encode: Object.assign(function pipeStringEncode(value) {
      return Array.isArray(value) ? value.join("|") : null;
    }, {
      isSyncAndSafe: true
    }),
    decode: Object.assign(function pipeStringDecode(value) {
      return typeof value === "string" ? value.split("|") : null;
    }, {
      isSyncAndSafe: true
    })
  }
});
const Query_nodeId_extensions = Object.assign(Object.create(null), {
  grafast: {
    plan($parent) {
      const specifier = handler.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler.codec.name].encode);
    }
  }
});
export const Node = new GraphQLInterfaceType({
  name: "Node",
  description: "An object with a globally unique `ID`.",
  fields() {
    return {
      nodeId: {
        description: "A globally unique identifier. Can be used in various places throughout the system to identify this single value.",
        type: new GraphQLNonNull(GraphQLID)
      }
    };
  }
});
const nodeIdHandlerByTypeName = Object.assign(Object.create(null), {
  Query: handler
});
const Query_node_extensions = Object.assign(Object.create(null), {
  grafast: {
    plan(_$root, args) {
      return node(nodeIdHandlerByTypeName, args.get("nodeId"));
    }
  }
});
export const Query = new GraphQLObjectType({
  name: "Query",
  description: "The root query type which gives access points into the data universe.",
  extensions: Object.assign(Object.create(null), {
    grafast: {
      assertStep() {
        return true;
      }
    }
  }),
  fields() {
    return {
      query: {
        description: "Exposes the root query type nested one level down. This is helpful for Relay 1\nwhich can only query top level fields if they are in a particular form.",
        type: new GraphQLNonNull(Query),
        extensions: Query_query_extensions
      },
      nodeId: {
        description: "The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`.",
        type: new GraphQLNonNull(GraphQLID),
        extensions: Query_nodeId_extensions
      },
      node: {
        description: "Fetches an object given its globally unique `ID`.",
        type: Node,
        args: {
          nodeId: {
            description: "The globally unique `ID`.",
            type: new GraphQLNonNull(GraphQLID)
          }
        },
        extensions: Query_node_extensions
      }
    };
  },
  interfaces() {
    return [Node];
  }
});
export const schema = new GraphQLSchema({
  query: Query,
  types: [Query, Node],
  enableDeferStream: true
});