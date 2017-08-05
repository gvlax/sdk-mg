
List files in a bucket:

``` shell
node index.js -l lcloud-427-mm
```
or

``` shell
node index.js --listAllFiles lcloud-427-mm
```

List all available buckets:

``` shell
node index.js -b 
```
or 

``` shell
node index.js --listBuckets
```
Delete a file from a bucket:

```
node index.js -d test.txt
```
or 

```
node index.js --deleteFiles test.txt
```
A file upload to a bucket:

```
node index.js -u /Users/maciej.gulak/projects/sdk-mg/README.md
```
or 

```
node index.js --uploadFile /Users/maciej.gulak/projects/sdk-mg/README.md
```
