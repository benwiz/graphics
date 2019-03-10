var files = "<?php $out = array();
foreach (glob('images/*.png') as $filename) {
    $p = pathinfo($filename);
    $out[] = $p['filename'];
}
echo json_encode($out); ?>;"
