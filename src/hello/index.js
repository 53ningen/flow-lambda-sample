// @flow

/**
 * ラムダ関数のメインエントリポイント
 */
function handler(events: any, context: any) {
  const msg: string = 'hello, work!';
  context.succeed({
    message: msg
  });
}

export default handler;
