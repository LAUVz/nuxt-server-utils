import type { NitroApp } from "nitropack";
import mongoose from "mongoose";
//@ts-ignore
import { useRuntimeConfig } from "#imports";

type NitroAppPlugin = (nitro: NitroApp) => void;

function defineNitroPlugin(def: NitroAppPlugin): NitroAppPlugin {
  return def;
}

export default defineNitroPlugin(async () => {
  const config = useRuntimeConfig();

  if (!config.nuxtServerUtils?.mongodbURL) {
    console.warn(
      "Mongodb URL not found in runtime config, skipping mongodb connection"
    );
    return;
  }
  try {
    await mongoose.connect(config.nuxtServerUtils.mongodbURL);
    console.info("Mongodb connected");
  } catch (e) {
    console.error("Mongodb connection error: ", e);
  }
});
