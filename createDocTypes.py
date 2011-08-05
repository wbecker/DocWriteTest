import os;

dirs=['xhtml','html4','html5']
doctypes=['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">',
  '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">\n<html>',
  '<!doctype html>']

for dir,doctype in zip(dirs, doctypes):
  if not os.path.exists(dir):
    os.makedirs(dir)  
  for file in os.listdir('baseTemplates'):
    if file.startswith('s'):
      content = open('baseTemplates/'+file).read()
      newfile = "".join([dir, '/', file])
      with open(newfile, 'w') as f:
        newcontent = "".join([doctype,"\n",content])
        f.write(newcontent)