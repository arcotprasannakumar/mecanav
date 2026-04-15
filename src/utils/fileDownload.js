export function triggerFileDownload(fileUrl) {
  if (!fileUrl) {
    return false;
  }

  const link = document.createElement("a");
  link.href = fileUrl;
  link.setAttribute("download", "");
  document.body.appendChild(link);
  link.click();
  link.remove();

  return true;
}
