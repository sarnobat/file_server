import java.io.IOException;
import java.nio.file.Paths;

public class FileServer extends NanoHTTPDModified {

	public FileServer(int port, String root) throws IOException {
		super(port, Paths.get(root).toFile());
	}

	@Override
	String renderFilename(String uri, String filenameAfter) {
		String path = super.encodeUri(uri + filenameAfter);
		String insideLink;
		if (filenameAfter.endsWith("jpg") || filenameAfter.endsWith("jpg") || filenameAfter.endsWith("gif")
				|| filenameAfter.endsWith("png")) {
			insideLink = "<img src=\"" + path + "\" width=100>" + filenameAfter;
		} else {
			insideLink = filenameAfter;
		}
		return "<a href=\"" + path + "\">" + insideLink + "</a>";
	}

	public static void main(String[] args) {
		try {
			new FileServer(8082,
					"/sarnobat.garagebandbroken/trash/misc_sync_master/");
			System.out.println("Started");
		} catch (IOException ioe) {
			System.err.println("Couldn't start server:\n" + ioe);
			System.exit(-1);
		}
		try {
			System.in.read();
		} catch (Throwable t) {
			System.out.println("Exiting");
		}
	}
}
