// export const copyGifToClipboard = async (url: string) => {
//   try {
//     // 1. Verificar si la API del portapapeles está disponible
//     if (!navigator.clipboard || !navigator.clipboard.write) {
//       console.error(
//         "Error al copiar al portapapeles: La API del portapapeles no está disponible en este navegador o contexto.",
//       );
//       return;
//     }

//     // 2. Verificar si ClipboardItem está disponible (necesario para copiar blobs/imágenes)
//     if (typeof ClipboardItem === "undefined") {
//       console.error(
//         "Error al copiar al portapapeles: ClipboardItem no está disponible. Solo se puede copiar texto plano.",
//       );
//       // Como fallback, podemos intentar copiar la URL como texto
//       await navigator.clipboard.writeText(url);
//       console.log(
//         "URL del GIF copiada al portapapeles (ClipboardItem no soportado).",
//       );
//       return;
//     }

//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(
//         `Fallo al cargar el GIF: ${response.status} ${response.statusText}`,
//       );
//     }
//     const blob = await response.blob();

//     await navigator.clipboard.write([
//       new ClipboardItem({
//         [blob.type]: blob,
//       }),
//     ]);

//     console.log("GIF copiado al portapapeles.");
//   } catch (error: any) {
//     console.error("Error al copiar al portapapeles:", error.message || error);
//     if (error.name === "NotAllowedError" || error.name === "SecurityError") {
//       console.error(
//         "Posible causa: Permiso denegado o contexto no seguro (HTTPS). Asegúrate de que la página se sirve sobre HTTPS y que has concedido permiso para acceder al portapapeles.",
//       );
//     } else if (error.name === "AbortError") {
//       console.error(
//         "La operación de escritura en el portapapeles fue abortada.",
//       );
//     } else if (
//       error.name === "TypeError" &&
//       error.message.includes("ClipboardItem")
//     ) {
//       console.error(
//         "Error de tipo con ClipboardItem. Podría ser un problema con el tipo MIME del blob o la implementación del navegador.",
//       );
//     }
//   }
// };
