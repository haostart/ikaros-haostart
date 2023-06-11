import Dashboard from './dashboard/module';
import User from './system/user/module';
import File from './content/file/module';
import Subject from './content/subject/module';
import Plugin from './system/plugin/module';
import Setting from './system/setting/module';

const coreModules = [Dashboard, User, File, Subject, Plugin, Setting];

export { coreModules };
