/**
 * BZip2 compression and decompression using WebAssembly.
 * Works in both Node.js and browser environments.
 */
declare class BZip2 {
  /**
   * Fetch and initialize the WASM module. Must be called before
   * compress() or decompress().
   */
  init(): Promise<void>;

  /**
   * Compress an array of bytes using bzip2.
   *
   * @param decompressed - The data to compress (TypedArray or regular array of bytes).
   * @param blockSize - Block size multiplier (1-9), multiplied by 100k. Default is 5 (500k).
   * @param compressedLength - Minimum size for the output buffer. Must be at least as large
   *   as the resulting compressed data. Defaults to `decompressed.length` (minimum 128).
   * @returns A Uint8Array of compressed data.
   * @throws {RangeError} If blockSize is not between 1 and 9.
   * @throws {Error} If compression fails (e.g. BZ_MEM_ERROR, BZ_OUTBUFF_FULL).
   */
  compress(
    decompressed: Uint8Array | ArrayLike<number>,
    blockSize?: number,
    compressedLength?: number,
  ): Uint8Array;

  /**
   * Decompress a bzip2-compressed array of bytes.
   *
   * @param compressed - The compressed data (TypedArray or regular array of bytes).
   * @param decompressedLength - Size for the output buffer. Must be at least as large
   *   as the resulting decompressed data.
   * @returns A Uint8Array of decompressed data.
   * @throws {Error} If decompression fails (e.g. BZ_DATA_ERROR, BZ_DATA_ERROR_MAGIC).
   */
  decompress(
    compressed: Uint8Array | ArrayLike<number>,
    decompressedLength: number,
  ): Uint8Array;
}

export default BZip2;
