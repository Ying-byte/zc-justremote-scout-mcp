#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "justremote",
  boardId: "justremote-official",
  domain: "justremote.co",
  npmName: "zc-justremote-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
