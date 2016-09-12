siddelacruz.com
===============

`Description`:  My website

`Author`:     Jared De La Cruz

```
$ docker build -t siddelacruz.com .
$ docker run -d --name siddelacruz_com -p 80 siddelacruz.com
$ docker service create --replicas 1 --name siddelacruz_com -p 80 siddelacruz.com
```
