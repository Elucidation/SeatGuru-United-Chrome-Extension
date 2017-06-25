import PIL.Image

for size in [16,48,128]:
  img = PIL.Image.new('RGB',(size,size),(102, 153, 255))
  img.save('icon%d.png' % size)