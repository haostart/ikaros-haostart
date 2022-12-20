package run.ikaros.server.utils;

import java.io.File;
import java.net.Inet4Address;
import java.net.InetAddress;
import java.net.UnknownHostException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import run.ikaros.server.constants.AppConst;

/**
 * 封装系统变量操作
 *
 * @author li-guohao
 * @date 2022/06/18
 */
public class SystemVarUtils {
    private static final Logger LOGGER = LoggerFactory.getLogger(SystemVarUtils.class);
    public static final String MEDIA_DIR_NAME = AppConst.MEDIA;
    public static final String ORIGINAL_DIR_NAME = AppConst.ORIGINAL;

    static {
        LOGGER.debug("current app dir path: {}", getCurrentAppDirPath());
        LOGGER.debug("current app user name: {}", getCurrentUserName());
        LOGGER.debug("current app user home: {}", getCurrentUserDirPath());
        LOGGER.debug("current cache tmp dir path: {}", getOsCacheDirPath());
        LOGGER.debug("current ipv4 address: {}", getIPAddress());
    }

    /**
     * @return 当前应用的目录路径
     */
    public static String getCurrentAppDirPath() {
        return System.getProperty("user.dir");
    }


    /**
     * @return 获取当前登录用户名称
     */
    public static String getCurrentUserName() {
        return System.getProperty("user.name");
    }

    /**
     * @return 当前登录用户的home目录路径
     */
    public static String getCurrentUserDirPath() {
        return System.getProperty("user.home");
    }

    public static String getOsCacheDirPath() {
        String tmpDirPath = System.getProperty("java.io.tmpdir");
        String ikarosCacheFileDir = tmpDirPath
            + (tmpDirPath.endsWith(File.separator) ? "" : File.separator) + "ikaros";
        File file = new File(ikarosCacheFileDir);
        if (!file.exists()) {
            file.mkdirs();
        }
        return ikarosCacheFileDir;
    }

    public static String getIPAddress() {
        InetAddress localHost = null;
        try {
            localHost = Inet4Address.getLocalHost();
        } catch (UnknownHostException e) {
            LOGGER.error(e.getMessage(), e);
        }
        return localHost.getHostAddress();
    }

    public static boolean platformIsWindows() {
        String osName = System.getProperty("os.name");
        if (StringUtils.isBlank(osName)) {
            return false;
        }
        return osName.contains("Windows");
    }

    public static String getCurrentAppMediaDirPath() {
        return getCurrentAppDirPath() + File.separator + MEDIA_DIR_NAME;
    }

    public static String getCurrentAppOriginalDirPath() {
        return getCurrentAppDirPath() + File.separator + ORIGINAL_DIR_NAME;
    }
}
