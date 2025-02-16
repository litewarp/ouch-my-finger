import { dirname } from "path";
import { fileURLToPath } from "url";
import { exportSchema } from "graphile-export";
import { postgraphile } from "postgraphile";
import config from "./graphile.config.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pgl = postgraphile(config);
async function main() {
	const { schema, resolvedPreset } = await pgl.getSchemaResult();
	const exportFileLocation = `${__dirname}/exported-schema.mjs`;
	await exportSchema(schema, exportFileLocation, {
		mode: "graphql-js",
		// or:
		// mode: "typeDefs",
		modules: {},
	});
}

main()
	// .finally(() => pgl.release())
	.catch((e) => {
		console.error(e);
		process.exit(1);
	});
